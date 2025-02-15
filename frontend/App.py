import streamlit as st
from generate import generate_content

st.title("Viral AI - Content Generator")
prompt = st.text_input("Enter a topic:")
if st.button("Generate"):
    output = generate_content(prompt)
    st.write(output)