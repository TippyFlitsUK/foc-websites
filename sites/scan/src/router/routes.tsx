import { Landing } from '@/views/Landing'
import { ProofSetDetails } from '@/views/ProofSetDetails'
import { ProofSets } from '@/views/ProofSets'
import { ProviderDetails } from '@/views/ProviderDetails'
import { PieceDetails } from '@/views/PieceDetails'
import { Providers } from '@/views/Providers'
import { Services } from '@/views/Services'
import { ServiceDetails } from '@/views/ServiceDetails'
import { Documentation } from '@/views/Documentation'
import { GasCalculator } from '@/views/GasCalculator'
import {
  Route,
  Routes,
  Navigate,
  useParams,
  useNavigate,
} from 'react-router-dom'
import { useNetwork } from '@/contexts/NetworkContext'
import { useEffect } from 'react'

// Redirect component with parameter capture
const CustomRedirect = ({
  slug,
  midPath,
}: {
  slug: string
  midPath: string
}) => {
  const params = useParams()
  const { network } = useNetwork()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${network}/${midPath}/${params[slug]}`, { replace: true })
  }, [network, params[slug], navigate])

  return null
}

const AppRoutes = () => {
  const { network } = useNetwork()

  return (
    <Routes>
      {/* Root route redirects to network-specific path */}
      <Route path="/" element={<Navigate to={`/${network}`} replace />} />

      {/* Network-specific routes */}
      <Route path="/:network" element={<Landing />} />
      <Route path="/:network/providers" element={<Providers />} />
      <Route
        path="/:network/providers/:providerId"
        element={<ProviderDetails />}
      />
      <Route
        path="/:network/piece/:cid"
        element={<PieceDetails />}
      />
      <Route path="/:network/datasets" element={<ProofSets />} />
      <Route
        path="/:network/dataset/:dataSetId"
        element={<ProofSetDetails />}
      />
      <Route path="/:network/piecesets" element={<ProofSets />} />
      <Route
        path="/:network/pieceset/:dataSetId"
        element={<ProofSetDetails />}
      />
      <Route path="/:network/services" element={<Services />} />
      <Route
        path="/:network/services/:serviceId"
        element={<ServiceDetails />}
      />

      {/* Network-agnostic routes */}
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/documentation/:docId" element={<Documentation />} />
      <Route path="/gas-calculator" element={<GasCalculator />} />

      {/* Legacy routes for backward compatibility */}
      <Route
        path="/providers"
        element={<Navigate to={`/${network}/providers`} replace />}
      />
      <Route
        path="/providers/:providerId"
        element={<CustomRedirect slug="providerId" midPath="providers" />}
      />
      <Route
        path="/datasets"
        element={<Navigate to={`/${network}/datasets`} replace />}
      />
      <Route
        path="/dataset/:dataSetId"
        element={<CustomRedirect slug="dataSetId" midPath="dataset" />}
      />
      <Route
        path="/piecesets"
        element={<Navigate to={`/${network}/piecesets`} replace />}
      />
      <Route
        path="/pieceset/:dataSetId"
        element={<CustomRedirect slug="dataSetId" midPath="pieceset" />}
      />
      <Route
        path="/services"
        element={<Navigate to={`/${network}/services`} replace />}
      />
      <Route
        path="/services/:serviceId"
        element={<CustomRedirect slug="serviceId" midPath="services" />}
      />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to={`/${network}`} replace />} />
    </Routes>
  )
}

export default AppRoutes
