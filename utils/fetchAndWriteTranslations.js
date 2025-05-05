import fs from "fs";
import path from "path";

export async function fetchAndWriteTranslations(url, locale) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON from ${url}`);
    }
    const data = await response.json();

    const outputDir = path.join(process.cwd(), "public/i18n/locales", locale);
    const outputFilePath = path.join(outputDir, "common.json");

    // Ensure the directory exists
    fs.mkdirSync(outputDir, { recursive: true });

    // Write the JSON data to the file
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Translation file written successfully to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error fetching or writing translations: ${error.message}`);
    throw error;
  }
}
