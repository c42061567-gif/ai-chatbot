export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Cloudflare Worker is running"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
