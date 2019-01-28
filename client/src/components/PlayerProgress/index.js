import React, { Component } from "react";
import StatusCard from "../StatusCard";
import animals from "../../zooAnimals.json";
import imageAtlas from "../../imageIndex";
class PlayerProgress extends Component {
  render() {
    return (
      <div>
        {animals.map(
          animal =>
            console.log("statuscard", animal) || (
              <StatusCard
                id={animal.id}
                image={imageAtlas[animal.animal_name]}
                completed={animal.completed}
                name={animal.animal_name}
              />
            )
        )}
      </div>
    );
  }
}

export default PlayerProgress;
