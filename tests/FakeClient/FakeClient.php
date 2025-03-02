<?

namespace Tests\FakeClient;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;

class FakeClient
{
    public function get(string $url): ResponseInterface
    {
        $content = file_get_contents(__DIR__ . '/../fixtures/fakePage.html');
        if (str_contains($url, 'bad.url')) throw new RequestException('Bad URL', new Request('GET', $url));
        return new Response(200, [], $content);
    }

    public function request(string $method, string $url, array $options = []): ResponseInterface
    {
        if (str_contains($url, 'bad.url')) throw new RequestException('Bad URL', new Request($method, $url));
        $ext = pathinfo(parse_url($url, PHP_URL_PATH), PATHINFO_EXTENSION);
        $testFiles = [
            'png' => '/../fixtures/assets/img/test.png',
            'css' => '/../fixtures/assets/css/test.css',
            'js'  => '/../fixtures/assets/js/test.js',
        ];

        $file = $testFiles[$ext] ?? '/../fixtures/assets/other/test.bin';

        copy(__DIR__ . $file, $options['sink']);

        return new Response(200, [], '');
    }
}
