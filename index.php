<?

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

downloadPage('https://facts.sovmaths.ru', __DIR__ . '/output', Client::class);