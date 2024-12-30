import Hello from "./components/hello";


export default function Home() {
  console.log("What am I doing here -- Server")
  return (
    <>
    <h1 className="text-3xl">Welcome to Nextjs</h1>
    <Hello />
    </>
  );
}
