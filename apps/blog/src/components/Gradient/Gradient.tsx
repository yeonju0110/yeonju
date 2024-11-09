interface Props {
  top: string
  left: string
}

const Gradient = ({ top, left }: Props) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: `${top}`,
        left: `${left}`,
        right: '0',
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgb(30, 30, 30, 0.3)',
            padding: '10px 0',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '30%',
            height: '30%',
            opacity: 0.3,
            zIndex: -1,
            borderRadius: '100%',
            background:
              'linear-gradient(90deg, #5f5f5f 0%, #3d3d3d 35%, #A934F6 100%)',
          }}
        />
      </div>
    </div>
  )
}

export default Gradient
