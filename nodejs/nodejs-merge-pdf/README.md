# PDF Merger

This Node.js script merges all PDF files from the `input/` folder into a single PDF file in the `output/` folder.
The script also displays a **progress bar** in the terminal during the merging process.

---

## 📂 Project Structure

```
project/
 ├─ input/           # Put your PDF files here
 ├─ output/          # The merged PDF will be saved here
 ├─ main.js         # Main script
 └─ package.json
```

---

## 📦 Installation

1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install pdf-lib cli-progress
   ```
3. Create folders:
   ```bash
   mkdir input output
   ```

---

## 🚀 Usage

1. Place all PDF files you want to merge into the `input/` folder.
2. Run the script:
   ```bash
   npm start
   ```
3. The merged PDF will be saved in the `output/` folder with a name like:
   ```
   merged_2025-08-13T11-30-45-123Z.pdf
   ```

---

## ⚙ How It Works

- Reads all `.pdf` files from the `input/` folder.
- Sorts the files alphabetically before merging.
- Uses [`pdf-lib`](https://www.npmjs.com/package/pdf-lib) to load and merge PDF pages.
- Uses [`cli-progress`](https://www.npmjs.com/package/cli-progress) to show a progress bar in the terminal.
- Saves the merged file in the `output/` folder with a timestamp in the filename.

---

## 📌 Example Output in Terminal

```
Merging PDFs |███████████████████████████| 100% || 3/3 files
✅ Merged PDF saved to: /path/to/output/merged_2025-08-13T11-30-45-123Z.pdf
```

---

## 🛠 Requirements

- Node.js **v14+**
- npm **v6+**
