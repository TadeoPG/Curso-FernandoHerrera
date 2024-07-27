export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Tadeo",
};

const passenger2: Passenger = {
  name: "Fernando",
  children: ["Natalia", "Elizabeth"],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;
  //   const howManyChildren = passenger.children!.length;
  const { name } = passenger;

  console.log(name, howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger1);
