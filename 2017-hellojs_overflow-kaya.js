//莊于萱

const BMI = {
    weight: 0,
    height: 0,
    getBMI: function() {
        return this.weight / (this.height*2)
    },
    getAdvice: function() {
        const bmi = this.getBMI()
        if (bmi < 18.5) {
            return('體重過輕');
        } else if (bmi >= 18.5 && bmi <24){
            return('體重適中');
        } else if(bmi >= 24){
            return('體重過重');
        }
    }
}

const kaya = Object.create(BMI);
kaya.weight = 50;
kaya.height = 166;
console.log(kaya.getBMI(),kaya.getAdvice());
