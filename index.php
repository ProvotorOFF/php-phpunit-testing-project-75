<?

require 'vendor/autoload.php';

use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

downloadPage('http://example.com', __DIR__ . '/output', FakeClient::class);