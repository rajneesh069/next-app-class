"use client";
export default function Page({ params }: { params: { courseId: string } }) {
  const { courseId } = params;
  return <div>{courseId}</div>;
}
