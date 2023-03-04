import { useState, useEffect } from "react";

export default function formatDate(date: string) {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => setFormattedDate(new Date(date).toLocaleDateString("ko-KR")));

  return formattedDate;
}
