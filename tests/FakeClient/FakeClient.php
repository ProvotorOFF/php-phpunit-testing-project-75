<?

namespace Tests\FakeClient;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;

class FakeClient
{
    public function get(string $url): ResponseInterface
    {
        $content = file_get_contents(__DIR__ . '/../fixtures/fakePage.html');
        return new Response(200, [], $content);
    }

    public function request(string $method, string $url, array $options = []): ResponseInterface
    {
        copy(__DIR__ . '/../fixtures/assets/img/test.png', $options['sink']);
        return new Response(200, [], '');
    }
}
