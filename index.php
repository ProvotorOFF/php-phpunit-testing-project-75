<?

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

downloadPage('sovmaths.ru', __DIR__ . '/output');