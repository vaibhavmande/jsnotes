<details>
  <summary>
    <span style="font-size: 125%">**map**</span>
  </summary>
  <br />
  Takes one parameter, a function that is called on every element of the array. It returns a new array
</details>

```javascript
const newArray = numbers.map(n => n + 1)
```

<details>
  <summary>
    <span style="font-size: 125%">**filter**</span>
  </summary>
  <br />
  Takes a function as its only parameter that is called on every element of the array. Based on the boolean value returned the element is kept or removed
</details>

```javascript
const oddNumbers = numbers.filter(n => n % 2 !== 0)
```

<details>
  <summary>
    <span style="font-size: 125%">**reduce**</span>
  </summary>
  <br />
  Takes an array of values and combine them into one value
</details>

```javascript
const total = numbers.reduce((total, n) => total + n, initialValue)
```

- [x] map
- [x] filter
- [x] reduce
- [ ] Spread Operator
- [ ] includes
- [ ] concat
- [ ] forEach
- [ ] indexOf
- [ ] find
- [ ] findIndex
- [ ] slice
- [ ] some
- [ ] every
- [ ] flat
- [ ] flatMap
- [ ] join
- [ ] from
- [ ] isArray
- [ ] sort - mutating
- [ ] fill
- [ ] reverse
- [ ] pop
- [ ] push
- [ ] splice
