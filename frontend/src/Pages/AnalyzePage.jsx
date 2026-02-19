import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import CSVUpload from '../components/HomePageComponent/CSVUpload';
import analysisService from '../services/analysisServices';
import AnalysisResults from '../components/AnalysisComponent/AnalysisResults';
import TransactionTable from '../components/AnalysisComponent/TransactionTable';
import GraphView from '../components/AnalysisComponent/GraphView';
import LoadingDialog from '../components/Common/LoadingDialog';
import Papa from 'papaparse';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const AnalyzePage = () => {
  const [data, setData] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timedLoading, setTimedLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const resultsRef = useRef(null);

  const handleUpload = async (csvData) => {
    setLoading(true);
    setTimedLoading(true);
    setError(null);
    setAnalysis(null);
    
    // Start the 3-second timer
    const timer = new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      const transactions = csvData.filter(row => row.transaction_id || row.TransactionID).map(row => ({
        transaction_id: row.transaction_id || row.TransactionID,
        sender_id: row.sender_id || row.SenderID,
        receiver_id: row.receiver_id || row.ReceiverID,
        amount: parseFloat(row.amount || row.Amount),
        timestamp: row.timestamp || row.Timestamp || new Date().toISOString()
      }));

      if (transactions.length === 0) {
        throw new Error("No valid transactions found in CSV bhai.");
      }

      setData({ transactions });
      const result = await analysisService.analyzeTransactions(transactions);
      
      // Wait for both results and 3-second timer
      await timer;
      
      setAnalysis(result.data);
      
      // Smooth scroll to results after a small delay to ensure rendering
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (err) {
      setError(err.message || "Failed to analyze data. Please check CSV format bhai.");
      console.error(err);
    } finally {
      setLoading(false);
      setTimedLoading(false);
    }
  };

  const downloadJSON = () => {
    if (!analysis) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(analysis, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "fraud_analysis.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <MainLayout>
      <div className="page-transition" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        padding: '32px 16px',
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '40px' 
        }}>
          {/* Header Area */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', paddingBottom: '24px', borderBottom: '1px solid #E5E7EB' }}>
            <button 
              onClick={() => navigate(-1)} 
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E5E7EB', 
                cursor: 'pointer', 
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease',
                marginTop: '4px'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: '900', letterSpacing: '-0.03em', color: '#111827', margin: 0 }}>
                Transaction <span style={{ color: '#2563EB' }}>Analysis</span>
              </h1>
              <p style={{ color: '#6B7280', fontSize: '16px', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
                Upload your transaction data to identify complex patterns, visualize network relations, and pinpoint high-risk anomalies in real-time.
              </p>
            </div>
          </div>

          {/* Upload Area (Hidden when data is present) */}
          {!data && (
            <div style={{ 
              width: '100%', 
              maxWidth: '800px', 
              margin: '40px auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
              border: '1px solid #E5E7EB',
              padding: '8px'
            }}>
              <CSVUpload onUpload={handleUpload} />
            </div>
          )}

          {/* Analysis View (Shown when data is present) */}
          {data && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', animation: 'fadeIn 0.5s ease-out' }}>
              {/* Raw Data List */}
              <div style={{ width: '100%' }}>
                <TransactionTable transactions={data.transactions} />
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div style={{ 
              backgroundColor: '#FEF2F2', 
              border: '1px solid #FCA5A5', 
              padding: '20px 24px', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px', 
              color: '#DC2626',
              boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.1)',
              animation: 'shake 0.4s ease-in-out'
            }}>
              <AlertCircle size={24} /> 
              <span style={{ fontWeight: '600', fontSize: '15px' }}>{error}</span>
            </div>
          )}

          {/* Final Analysis Output */}
          {analysis && (
            <div ref={resultsRef} style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <AnalysisResults results={analysis} onDownload={downloadJSON} />
              
              {/* Relation Mapping Moved to the Bottom */}
              <div style={{ width: '100%' }}>
                <GraphView data={{ transactions: data?.transactions || [], analysis }} />
              </div>
            </div>
          )}
        </div>
        
        <LoadingDialog isOpen={timedLoading} />
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
        `}</style>
      </div>
    </MainLayout>
  );
};

export default AnalyzePage;
