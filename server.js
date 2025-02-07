const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/payment', (req, res) => {
  const { tickets, package } = req.body;

  // هنا يمكنك إضافة منطق الدفع (نقدي، تحويل بنكي، فيزا)
  const paymentSuccess = true; // افتراضيًا نجاح العملية

  if (paymentSuccess) {
    res.json({ success: true, message: "تمت عملية الدفع بنجاح" });
  } else {
    res.status(400).json({ success: false, message: "فشل عملية الدفع" });
  }
});

app.listen(3000, () => {
  console.log('الخادم يعمل على http://localhost:3000');
});
