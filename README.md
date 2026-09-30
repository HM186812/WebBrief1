# WebBrief Lao - ລະບົບເກັບກຳຄວາມຕ້ອງການສ້າງເວັບໄຊ

ລະບົບເກັບກຳຂໍ້ມູນ, ຄວາມຕ້ອງການ ແລະ ສະໄຕລ໌ການສ້າງເວັບໄຊຂອງລູກຄ້າ (Client Brief) ເພື່ອການອອກແບບ ແລະ ພັດທະນາເວັບໄຊຕາມມາດຕະຖານສາກົນ ພ້ອມຟັງຊັນສົ່ງຂໍ້ມູນເຂົ້າ WhatsApp ແລະ ສົ່ງອອກ PDF/Print ໄດ້ທັນທີ.

---

## 🚀 ວິທີ Run ໂຄງການໃນເຄື່ອງ (Run Locally)

### ຂັ້ນຕອນທີ 1: ຕິດຕັ້ງ Dependencies
```bash
npm install
```

### ຂັ້ນຕອນທີ 2: ເປີດ Dev Server
```bash
npm run dev
```
ຫຼັງຈາກນັ້ນເປີດ Browser ໄປທີ່: `http://localhost:3000`

### ຂັ້ນຕອນທີ 3: ທົດສອບ Build
```bash
npm run build
```
ແລະ ທົດສອບເບິ່ງຜົນການ Build:
```bash
npm run preview
```

---

## 🌐 ວິທີ Deploy ຂຶ້ນເທິງ Vercel

ໂຄງການນີ້ໄດ້ຖືກຕັ້ງຄ່າ [vercel.json](file:///c:/Users/ASUS/Documents/Web_App/WebBrief1/vercel.json) ແລະ [package.json](file:///c:/Users/ASUS/Documents/Web_App/WebBrief1/package.json) ໄວ້ພ້ອມສຳລັບ Vercel ຮຽບຮ້ອຍແລ້ວ.

### ວິທີທີ 1: Deploy ຜ່ານ Vercel Dashboard (ແນະນຳ - ງ່າຍທີ່ສຸດ)
1. Push ໂຄງການນີ້ຂຶ້ນ GitHub / GitLab / Bitbucket
2. ເຂົ້າສູ່ລະບົບທີ່ [vercel.com](https://vercel.com)
3. ກົດ **"Add New..."** -> **"Project"**
4. ເລືອກ Repository ໂຄງການຂອງທ່ານ
5. Vercel ຈະກວດພົບ Framework ເປັນ **Vite** ໂດຍອັດຕະໂນມັດ:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build` ຫຼື `vite build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. ກົດປຸ່ມ **Deploy** ແລ້ວລໍຖ້າປະມານ 1 ນາທີ ເວັບໄຊຈະ Online ທັນທີ!

---

### ວິທີທີ 2: Deploy ຜ່ານ Vercel CLI (ຜ່ານ Terminal)
1. ຕິດຕັ້ງ Vercel CLI (ຖ້າຍັງບໍ່ມີ):
   ```bash
   npm install -g vercel
   ```
2. Login ເຂົ້າ Vercel:
   ```bash
   vercel login
   ```
3. Deploy ໂຄງການ:
   ```bash
   vercel
   ```
4. Deploy ຂຶ້ນ Production:
   ```bash
   vercel --prod
   ```
