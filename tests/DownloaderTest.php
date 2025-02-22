<?

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;
use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

class DownloaderTest extends TestCase
{

    CONST TEST_URL = 'https://ru.hexlet.io/courses';
    CONST FILE_NAME = 'ru-hexlet-io-courses.html';
    CONST FIXTURE_PATH = __DIR__ . '/fixtures';
    CONST OUTPUT_PATH = __DIR__ . '/output';

    protected $content;
    protected $fileName;

    protected function setUp(): void {
        if (!file_exists(self::OUTPUT_PATH)) {
            mkdir(self::OUTPUT_PATH);
        }

        $this->content = file_get_contents(static::FIXTURE_PATH . '/fakePage.html');
        $this->fileName = static::OUTPUT_PATH . '/' . static::FILE_NAME;
    }

    public function testDownloadPage() {
        
        downloadPage(static::TEST_URL, static::OUTPUT_PATH, FakeClient::class);

        $this->assertFileExists($this->fileName);
        $this->assertEquals(file_get_contents($this->fileName), $this->content);
    }

    protected function tearDown(): void
    {
        array_map('unlink', glob(self::OUTPUT_PATH . "/*"));
        rmdir(self::OUTPUT_PATH);
    }
}