



export default class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Slider
        mode={1}
        step={1}
        domain={domain}
        rootStyle={styles.sliderStyle}
        onUpdate={this.onUpdate}
        onChange={this.onChange}
        values={values}
      >
        <Rail>{railProps => <TooltipRail {...railProps} />}</Rail>
        <Handles>
          {({ handles, activeHandleID, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  isActive={handle.id === activeHandleID}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    )
  }
}
