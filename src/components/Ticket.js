export default function Ticket({ ticket }) {
  return (
    <div className="ticket p-4 border">
      <h1 className="text-xl font-bold">ريسوت جيمز - Resort Games</h1>
      <p className="text-lg">تذكرة ألعاب - Game Ticket</p>
      <p className="text-sm">الأطفال تحت مسؤولية أولياء الأمور</p>
      <p className="text-sm">Children are under guardians' responsibility</p>
      <p className="text-lg">السعر: {ticket.price} ريال</p>
      <p className="text-sm">التاريخ: {ticket.date}</p>
    </div>
  );
}
