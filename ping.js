// ping.js
// Loon cron 定时请求脚本，每次触发访问一次 Cloudflare 204

const url = "https://cp.cloudflare.com/generate_204";

$httpClient.get(url, (error, response, data) => {
  if (error) {
    console.log("[Loon Ping] 请求失败: " + error);
  } else {
    console.log("[Loon Ping] 状态码: " + response.status);
  }
  $done();
});
