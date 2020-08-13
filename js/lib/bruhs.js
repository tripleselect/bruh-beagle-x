const count = document.getElementById("click")?.querySelector('legend');
Object.defineProperty(globalThis, "bruhs", {
    get() {
        return BigInt(localStorage.getItem("bruhs"));
    },
    set(bigint) {
        localStorage.setItem("bruhs", bigint);
        count.innerText = bruhs.toString();
    },
});
if (!localStorage.getItem('bruhs'))
    bruhs = 0n; // set inital bruh count
bruhs = bruhs; // update counter
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ1aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2JydWhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBdUIsQ0FBQztBQUU5RixNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUU7SUFDekMsR0FBRztRQUNELE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsR0FBRyxDQUFFLE1BQU07UUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0QyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQSxDQUFDLHdCQUF3QjtBQUV2RSxLQUFLLEdBQUcsS0FBSyxDQUFBLENBQUMsaUJBQWlCIn0=