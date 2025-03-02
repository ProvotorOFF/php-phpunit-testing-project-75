<?

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

downloadPage('bad.url', __DIR__ . '/output', FakeClient::class);