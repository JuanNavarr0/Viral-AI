from fastapi import FastAPI
from generate import generate_content
from audio_generator import generate_audio
from image_generator import generate_image

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Viral-AI API"}

@app.post("/generate")
def create_content(prompt: str):
    text_output = generate_content(prompt)
    audio_output = generate_audio(text_output)
    image_output = generate_image(text_output)
    return {
        "text": text_output,
        "audio": audio_output,
        "image": image_output
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)