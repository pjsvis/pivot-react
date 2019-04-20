import React from 'react';
import TableRenderers from 'react-pivottable/TableRenderers';
// import PivotTable from "react-pivottable/PivotTable";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
// import { sortAs } from "react-pivottable/Utilities";
import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import {data} from './data'

// create Plotly React component via dependency injection
const Plot = createPlotlyComponent(window.Plotly);

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
          <div className=" pa4">
          <div className="ba br3 b--black-10 pa3 fl w-auto">
            <div className="f5 black-50">Canadian MPs</div>
            <PivotTableUI
                className="black-50"
                data={data}
                onChange={s => this.setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />
            </div>
            </div>
        );
    }
}