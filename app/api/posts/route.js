export async function POST(request) {
    const body = await request.json();
    
    // Yeni yazıyı kaydetme işlemi (veritabanı yerine şimdilik bir array içinde saklıyoruz)
    const newPost = { id: Date.now(), ...body };
    
    // Veriyi geri döndür
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }