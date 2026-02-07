import tkinter as tk
from tkinter import messagebox

def login():
    if entry_user.get() == "admin" and entry_pass.get() == "123":
        messagebox.showinfo("نجاح", "أهلاً بك في منظومة التقدم والعطاء")
    else:
        messagebox.showerror("خطأ", "اسم المستخدم أو كلمة المرور خطأ")

# إنشاء النافذة
root = tk.Tk()
root.title("منظومة التقدم والعطاء - الإصدار الأول")
root.geometry("400x300")
root.configure(bg="#2c3e50")

# واجهة الدخول
tk.Label(root, text="تسجيل الدخول", font=("Arial", 16, "bold"), fg="white", bg="#2c3e50").pack(pady=20)

entry_user = tk.Entry(root, justify="center")
entry_user.insert(0, "اسم المستخدم")
entry_user.pack(pady=5)

entry_pass = tk.Entry(root, show="*", justify="center")
entry_pass.pack(pady=5)

tk.Button(root, text="دخول", command=login, bg="#27ae60", fg="white", width=10).pack(pady=20)

root.mainloop()