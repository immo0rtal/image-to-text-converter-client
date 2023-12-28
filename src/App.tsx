import { UploadImage, ProcessedResults } from "./components";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.root}>
      <header>
        <div className={styles.title}>Image to Text Converter</div>
        <p className={styles.description}>
          We use neural network to help you get text from your image!
        </p>
      </header>
      <main className={styles.content}>
        <UploadImage />
        <ProcessedResults />
      </main>
    </div>
  );
}

export default App;
