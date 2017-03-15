Array.prototype.toTwenty = function() {
  for(let i=1; i<=20; i++) {
    this.push(i);
  }
  return this;
}

Array.prototype.toForty = function() {
  for(let i=2; i<=40; i+=2) {
    this.push(i);
  }
  return this;
}

Array.prototype.toOneThousand = function() {
  for(let i=10; i<=1000; i+=10) {
    this.push(i);
  }
  return this;
}

Array.prototype.search = function(num) {
  let count = 0;
  let startIndex = 0;
  let endIndex = this.length-1;

  while(startIndex <= endIndex){
    if (this[startIndex]===num) {
      return {count: count, index:startIndex, length: this.length}
    }
    if(this[endIndex]===num) {
      return {count: count, index:endIndex, length: this.length}
    }
    let midPoint = Math.floor((startIndex+endIndex)/2);
    if (this[midPoint] === num) {
      return {count: count, index: midPoint, length: this.length};
    }
    else if (this[midPoint] > num) {
      endIndex = midPoint-1;
      startIndex+=1;
    }
    else {
      startIndex = midPoint+1;
      endIndex-=1;
    }
    count+=1;
  }
  return {count: count, index: -1, length: this.length};
}

