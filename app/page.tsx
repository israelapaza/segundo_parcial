import Card from "@/components/Card";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <Card
        number="1"
        title="Agenda/Topic"
        code="SAAS-0000"
        description="Description of what is done here"
        date="3/8/2020"
        status="active"
      />
      <Card
        number="1"
        title="Agenda/Topic"
        code="SAAS-0000"
        description="Description of what is done here"
        date="3/8/2020"
        status="future"
      />
      <Card
        number="1"
        title="Agenda/Topic"
        code="SAAS-0000"
        description="Description of what is done here"
        date="3/8/2020"
        status="completed"
      />
    </div>
  );
}

