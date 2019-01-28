import React, { Component } from "react";
import StatusCard from "../StatusCard";
import animals from "../../zooAnimals.json";
import imageAtlas from "../../imageIndex";
import Wrapper from "../wrapper";
class PlayerProgress extends Component {
  render() {
    return (
      <div>
        <Wrapper>
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
        </Wrapper>
      </div>
    );
  }
}

export default PlayerProgress;
