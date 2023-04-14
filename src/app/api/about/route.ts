export async function GET(_request: Request) {
  return new Response(
    JSON.stringify({
      authors: [
        {
          name: "Javi",
          github: "https://github.com/Jabolol",
          likes: "pancakes",
        },
        {
          name: "Alex",
          github: "https://github.com/alex-alra-arteaga",
          likes: "risotto",
        },
        {
          name: "David",
          github: "https://github.com/xRozzo",
          likes: "protein",
        },
      ],
    }, null, 2),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
