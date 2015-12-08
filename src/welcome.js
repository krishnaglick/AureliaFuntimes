
export class Welcome {
  heading = 'Whoot whoot!';
  firstName = 'John';
  lastName = 'Doe';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}`);
  }
}
