def generate_image(text):
    return f"Image generated based on: {text[:30]}..."

if __name__ == "__main__":
    print(generate_image("Battle of Waterloo scenario."))