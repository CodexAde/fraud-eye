import React, { useState } from 'react';
import { Table, FileText, Database, ChevronLeft, ChevronRight } from 'lucide-react';

const TransactionTable = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  if (!transactions || transactions.length === 0) return null;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="apple-card" style={{ padding: '0', overflow: 'hidden', marginTop: '20px' }}>
      <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#EFF6FF', padding: '10px', borderRadius: '12px', color: '#2563EB' }}>
          <Database size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827' }}>Injected Data Stream</h3>
          <p style={{ color: '#6B7280', fontSize: '12px' }}>Raw transaction records from the source</p>
        </div>
      </div>
      
      <div style={{ overflowX: 'auto', minHeight: '400px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#F9FAFB' }}>
            <tr style={{ borderBottom: '1px solid var(--border)', color: '#4B5563', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '16px 24px' }}>Transaction ID</th>
              <th style={{ padding: '16px 24px' }}>Sender</th>
              <th style={{ padding: '16px 24px' }}>Receiver</th>
              <th style={{ padding: '16px 24px', textAlign: 'right' }}>Amount</th>
              <th style={{ padding: '16px 24px' }}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((t, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFF'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <td style={{ padding: '12px 24px', fontFamily: 'monospace', fontSize: '13px', color: '#111827' }}>{t.transaction_id}</td>
                <td style={{ padding: '12px 24px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
                    {t.sender_id}
                  </div>
                </td>
                <td style={{ padding: '12px 24px', fontSize: '13px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    {t.receiver_id}
                  </div>
                </td>
                <td style={{ padding: '12px 24px', textAlign: 'right', fontWeight: '700', color: '#111827' }}>
                  ${Number(t.amount).toLocaleString()}
                </td>
                <td style={{ padding: '12px 24px', fontSize: '12px', color: '#6B7280' }}>
                  {new Date(t.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={{ padding: '16px 24px', backgroundColor: '#F9FAFB', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500' }}>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, transactions.length)} of {transactions.length} entries
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style={{
                padding: '6px',
                backgroundColor: currentPage === 1 ? '#F3F4F6' : '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                color: currentPage === 1 ? '#9CA3AF' : '#4B5563',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#111827', margin: '0 8px' }}>
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
               style={{
                padding: '6px',
                backgroundColor: currentPage === totalPages ? '#F3F4F6' : '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                color: currentPage === totalPages ? '#9CA3AF' : '#4B5563',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
