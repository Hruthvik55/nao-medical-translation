// If Node fetch ever fails, uncomment below
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));

const translateText = async ({ text, sourceLanguage, targetLanguage }) => {
  // No text → nothing to translate (audio-only messages)
  if (!text || !text.trim()) {
    return "";
  }

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${sourceLanguage}|${targetLanguage}`;

    const response = await fetch(url);
    const data = await response.json();

    // Successful translation
    if (
      data &&
      data.responseData &&
      data.responseData.translatedText &&
      data.responseData.translatedText.trim() !== ""
    ) {
      return data.responseData.translatedText;
    }

    // Fallback: return original text cleanly
    return text;
  } catch (error) {
    console.error("Translation failed:", error.message);
    return text;
  }
};

module.exports = { translateText };
