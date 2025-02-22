<?

namespace Downloader\Downloader;

use GuzzleHttp\Client;

function downloadPage(string $url, string $path = '', string $clientClass = Client::class) {
    $client = new $clientClass();
    $html = $client->get($url)->getBody()->getContents();
    if (!file_exists($path)) mkdir($path, 0777, true);
    $fileName = preg_replace('/[^a-zA-Z0-9]+/', '-', preg_replace('#^https?://#', '', $url)) . '.html';
    file_put_contents(
        "$path/$fileName",
        $html
    );
}