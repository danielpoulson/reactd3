/**
 * Sample for Gauge default sample
 */
import React, { Component } from "react";
import {
  CircularGaugeComponent,
  Annotations,
  AnnotationsDirective,
  AnnotationDirective,
  AxesDirective,
  AxisDirective,
  Inject,
  PointersDirective,
  PointerDirective,
  RangesDirective,
  RangeDirective
} from "@syncfusion/ej2-react-circulargauge";
// import { SampleBase } from "../common/sample-base";
import "./gauge.css";
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
export default class Gauge extends Component {
  load = () => {
    console.log("Loading");
  };
  render() {
    return (
      <div className="control-panel">
        <style>{SAMPLE_CSS}</style>
        <div className="control-section">
          <CircularGaugeComponent
            load={this.load}
            id={this.props.name}
            height="300px"
            width="435px"
            centerY="60%"
          >
            <Inject services={[Annotations]} />
            <AxesDirective>
              <AxisDirective
                radius="95%"
                startAngle={230}
                endAngle={130}
                majorTicks={{ width: 0 }}
                lineStyle={{ width: 0 }}
                minorTicks={{
                  color: "white",
                  width: 1,
                  interval: 5,
                  height: 20
                }}
                labelStyle={{
                  font: {
                    fontFamily: "Roboto",
                    size: "14px",
                    fontWeight: "Bold",
                    color: "#AEB6BF"
                  },
                  offset: 5
                }}
              >
                <PointersDirective>
                  <PointerDirective
                    value={this.props.value}
                    radius="70%"
                    pointerWidth={10}
                    color={"#17202A"}
                    cap={{
                      radius: 10,
                      color: "#17202A",
                      border: {
                        color: "#FDFEFE",
                        width: 5
                      }
                    }}
                    needleTail={{
                      length: "0%",
                      color: "#FFFFF"
                    }}
                  />
                </PointersDirective>
                <RangesDirective>
                  <RangeDirective
                    start={0}
                    end={45}
                    startWidth={20}
                    endWidth={20}
                    color="#FF80AB"
                  />
                  <RangeDirective
                    start={45}
                    end={100}
                    startWidth={20}
                    endWidth={20}
                    color="#7CFC00"
                  />
                </RangesDirective>
                <AnnotationsDirective>
                  <AnnotationDirective
                    content={`<div><span class="lapp__gauge-title" >${
                      this.props.value
                    }%</span></div>`}
                    angle={180}
                    zIndex="1"
                    radius="30%"
                  />
                  <AnnotationDirective
                    content={`<div><span class="lapp__gauge-title">${
                      this.props.name
                    }</span></div>`}
                    angle={180}
                    zIndex="1"
                    radius="50%"
                  />
                </AnnotationsDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        </div>
      </div>
    );
  }
}
