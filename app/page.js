import Link from "next/link";

export default function Home() {
  let name = "park";
  return (
    <main>
      <div className="navbar">
        <Link href="/">home</Link>
        <Link href="/list">list페이지</Link>
      </div>
      <h4 className="title" style={{ color: "red", fontSize: "20px" }}>
        애플후레시
      </h4>
      <p className="title-sub"> by dev {name}</p>
    </main>
  );
}
