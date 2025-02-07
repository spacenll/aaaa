import { useState } from 'react';

export default function Home() {
  const [tickets, setTickets] = useState(1);
  const [package, setPackage] = useState(null);

  const packages = [
    { id: 1, name_ar: "باقة 10", name_en: "Package 10", buy: 10, get: 12 },
    { id: 2, name_ar: "باقة 15", name_en: "Package 15", buy: 15, get: 18 },
  ];

  const handlePayment = async () => {
    // تنفيذ عملية الدفع
    const response = await axios.post('/api/payment', { tickets, package });
    if (response.data.success) {
      alert("تمت عملية الدفع بنجاح!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">تذاكر العاب ريسوت</h1>
      <div className="mt-4">
        <label>عدد التذاكر:</label>
        <input
          type="number"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="mt-4">
        <label>اختر الباقة:</label>
        <select
          onChange={(e) => setPackage(e.target.value)}
          className="border p-2"
        >
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name_ar} - {pkg.buy} ريال
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handlePayment}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        ادفع الآن
      </button>
    </div>
  );
}
