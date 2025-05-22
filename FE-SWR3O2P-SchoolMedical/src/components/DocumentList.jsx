const docs = [
  { id: 1, title: "Hướng dẫn phòng chống dịch bệnh", link: "#" },
  { id: 2, title: "Chăm sóc sức khỏe tâm thần cho học sinh", link: "#" },
];

export default function DocumentList() {
  return (
    <ul>
      {docs.map((doc) => (
        <li key={doc.id}>
          <a href={doc.link} target="_blank" rel="noopener noreferrer">
            {doc.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
