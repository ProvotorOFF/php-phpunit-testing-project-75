<?

namespace Downloader\Downloader;

use DiDom\Document;
use GuzzleHttp\Client;
use Throwable;

function downloadPage(string $url, string $path = '', string $clientClass = Client::class)
{
    $client = new $clientClass();
    $html = $client->get($url)->getBody()->getContents();
    if (!file_exists($path)) mkdir($path, 0777, true);
    $base = preg_replace('/[^a-zA-Z0-9]+/', '-', preg_replace('#^https?://#', '', $url));
    $fileName =  "$base.html";
    $assetsDir = "$path/{$base}_files";
    if (!file_exists($assetsDir)) mkdir($assetsDir, 0777, true);

    $doc = new Document($html);

    foreach ($doc->find('img') as $child) {
        if (!$child->hasAttribute('src')) continue;

        $resourceUrl = $child->getAttribute('src');
        $absoluteUrl = parse_url($resourceUrl, PHP_URL_SCHEME) ? $resourceUrl : rtrim($url, '/') . '/' . ltrim($resourceUrl, '/');

        $assetName = preg_replace('/[^a-zA-Z0-9]+/', '-', preg_replace('#^https?://#', '', $absoluteUrl));
        $ext = pathinfo(parse_url($absoluteUrl, PHP_URL_PATH), PATHINFO_EXTENSION);

        $assetFile = "$assetName.$ext";
        $assetPath = "$assetsDir/$assetFile";
        
        try {
            $client->request('GET', $absoluteUrl, ['sink' => $assetPath]);
            $child->setAttribute('src', "{$base}_files/$assetFile");
        } catch (Throwable $e) {

        }
    }
    file_put_contents("$path/$fileName", $doc->html());
}
