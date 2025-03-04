<?

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

downloadPage('https://sovmaths.ru/about', __DIR__ . '/output');