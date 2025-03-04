<?

namespace Downloader\Downloader;

use DiDom\Document;
use GuzzleHttp\Client;
use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;
use Throwable;

const ASSETS_MAP = [
    'img' => 'src',
    'script' => 'src',
    'link' => 'href'
];


function downloadPage(string $url, string $path = '', string $clientClass = Client::class)
{
    $logPath = "$path/logs";
    $log = new Logger('downloadLog');
    if (!file_exists($path)) mkdir($path, 0777, true);
    if (!file_exists($logPath)) mkdir($logPath, 0777, true);
    $log->pushHandler(new StreamHandler("$logPath/error.log", Level::Error));
    /** @var Client $client */
    $client = new $clientClass();
    try {
        $html = $client->get($url)->getBody()->getContents();
    } catch (Throwable $e) {
        $log->error($e->getMessage());
        throw $e;
    }
    $base = preg_replace('/[^a-zA-Z0-9]+/', '-', preg_replace('#^https?://#', '', $url));
    $fileName =  "$base.html";
    $assetsDir = "$path/{$base}_files";
    if (!file_exists($assetsDir)) mkdir($assetsDir, 0777, true);

    $doc = new Document($html);

    foreach (ASSETS_MAP as $asset => $source) {
        foreach ($doc->find($asset) as $child) {
            if (!$child->hasAttribute($source)) continue;

            $resourceUrl = $child->getAttribute($source);
            $absoluteUrl = parse_url($resourceUrl, PHP_URL_SCHEME) ? $resourceUrl : rtrim($url, '/') . '/' . ltrim($resourceUrl, '/');

            $assetName = preg_replace('/[^a-zA-Z0-9]+/', '-', preg_replace('#^https?://#', '', $absoluteUrl));
            $ext = pathinfo(parse_url($absoluteUrl, PHP_URL_PATH), PATHINFO_EXTENSION);

            $assetFile = "$assetName.$ext";
            $assetPath = "$assetsDir/$assetFile";
            try {
                $client->request('GET', $absoluteUrl, ['sink' => $assetPath]);
            } catch (Throwable $e) {
                $log->error($e->getMessage());
            //throw $e;
            } finally {
                $child->setAttribute($source, "{$base}_files/$assetFile");
            }
        }
    }

    file_put_contents("$path/$fileName", $doc->html());

    return "$path/$fileName";
}
