"use client";
import { useRouter } from "next/navigation";

export default function Courses() {
  const router = useRouter();
  return (
    <>
      Courses
      <button
        onClick={() => {
          router.push("/courses/somethingNew");
        }}
      >
        Click me
      </button>
    </>
  );
}
