<?

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;
use Tests\FakeClient\FakeClient;

use function Downloader\Downloader\downloadPage;

class DownloaderTest extends TestCase
{

    const TEST_URL = 'https://ru.hexlet.io/courses';
    const FILE_NAME = 'ru-hexlet-io-courses.html';
    const FIXTURE_PATH = __DIR__ . '/fixtures';
    const OUTPUT_PATH = __DIR__ . '/output';
    const ASSETS_DIR = self::OUTPUT_PATH . '/ru-hexlet-io-courses_files';
    const TEST_IMAGE = 'test.png';
    const TEST_CSS = 'test.css';
    const TEST_JS = 'test.js';
    const EXPECTED_PAGE = self::FIXTURE_PATH . '/expectedPage.html';

    protected $content;
    protected $fileName;
    protected $imagePath;
    protected $cssPath;
    protected $jsPath;

    protected function setUp(): void
    {
        if (!file_exists(self::OUTPUT_PATH)) {
            mkdir(self::OUTPUT_PATH);
        }

        $this->content = file_get_contents(self::EXPECTED_PAGE);
        $this->fileName = static::OUTPUT_PATH . '/' . static::FILE_NAME;
        $this->imagePath = self::FIXTURE_PATH . '/assets/img/' . self::TEST_IMAGE;
        $this->cssPath = self::FIXTURE_PATH . '/assets/css/' . self::TEST_CSS;
        $this->jsPath = self::FIXTURE_PATH . '/assets/js/' . self::TEST_JS;
    }

    public function testDownloadPage()
    {

        downloadPage(static::TEST_URL, static::OUTPUT_PATH, FakeClient::class);

        $this->assertFileExists($this->fileName);
        $this->assertStringEqualsStringIgnoringLineEndings($this->content, file_get_contents($this->fileName));

        $this->assertEquals(
            hash_file('sha256', $this->imagePath),
            hash_file('sha256', self::ASSETS_DIR . '/ru-hexlet-io-courses-assets-img-test-png.png')
        );

        $this->assertEquals(
            hash_file('sha256', $this->cssPath),
            hash_file('sha256', self::ASSETS_DIR . '/ru-hexlet-io-courses-assets-css-test-css.css')
        );

        $this->assertEquals(
            hash_file('sha256', $this->jsPath),
            hash_file('sha256', self::ASSETS_DIR . '/ru-hexlet-io-courses-assets-js-test-js.js')
        );
    }

    public function testBadUrl() {
        $this->expectException(RequestException::class);
        downloadPage('bad.url', static::OUTPUT_PATH, FakeClient::class);
    }

    protected function tearDown(): void
    {
        $this->deleteDir(self::OUTPUT_PATH);
    }

    protected function deleteDir($dirPath)
    {
        if (!is_dir($dirPath)) return;

        foreach (scandir($dirPath) as $file) {
            if ($file === '.' || $file === '..') continue;
            $fullPath = "$dirPath/$file";
            if (is_dir($fullPath)) {
                $this->deleteDir($fullPath);
            } else {
                unlink($fullPath);
            }
        }
        rmdir($dirPath);
    }
}
