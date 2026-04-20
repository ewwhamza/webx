class BankAccount {
    public name: string;
    private balance: number;
    protected type: string;
    constructor(name: string, balance: number, type: string) {
        this.name = name;
        this.balance = balance;
        this.type = type;
    }
    public getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    constructor(name: string, balance: number, type: string) {
        super(name, balance, type);
    }
    public getType() {
        return this.type;
    }
}
const myAccount = new SavingsAccount("Darshan", 5000, "Savings");
console.log(myAccount.name);
console.log(myAccount.getBalance());
console.log(myAccount.getType());