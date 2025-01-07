export const Alert = ({ isDag, nodes, edges, onClose }) => {
    return (
        <div
            style={{
                height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'white', border: '3px solid black', borderRadius: '0.75rem', padding: '24px', boxShadow: '0 0 30px 15px rgba(0, 0, 0, 0.2)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>The pipeline is</span>
                    <p style={{ fontWeight: 'bold', paddingLeft: '4px' }}>
                        {isDag ? 'a Directed Acyclic Graph' : 'not a Directed Acyclic Graph'}
                    </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>There are</span>
                    <p style={{ fontWeight: 'bold', padding: '0 4px' }}>{nodes}</p>
                    <span>nodes in the pipeline</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>There are</span>
                    <p style={{ fontWeight: 'bold', padding: '0 4px' }}>{edges}</p>
                    <span>edges in the pipeline</span>
                </div>
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: 'var(--secondary)', color: 'white', fontWeight: '600', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = 'var(--primary)')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'var(--secondary)')}
                >
                    OK
                </button>
            </div>
        </div>
    );
};
