from prompt_generator import generate_prompt

def generate_content(prompt):
    formatted_prompt = generate_prompt(prompt)
    return f"Generated content based on: {formatted_prompt}"

if __name__ == "__main__":
    sample_prompt = "Historical event: Moon Landing"
    print(generate_content(sample_prompt))