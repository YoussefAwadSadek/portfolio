'use client';

import Image from 'next/image';
import { Award, BadgeCheck } from 'lucide-react';
import type { Certification } from '@/lib/data';
import { ComingSoon } from './ComingSoon';
import { Modal } from './Modal';

/** Certificate popup: the certificate or badge image, then issuer, date, and a verification link. */
export function CertificateModal({
  certification,
  onClose,
}: {
  certification: Certification | null;
  onClose: () => void;
}) {
  return (
    <Modal
      open={certification !== null}
      onClose={onClose}
      title={certification?.name ?? ''}
      width="sm:max-w-3xl"
    >
      {certification && (
        <>
          <div className="flex justify-center border-b border-slate-200 bg-slate-50 p-4 sm:p-6 dark:border-slate-800 dark:bg-slate-950/50">
            {certification.image ? (
              // Only mounted once the popup opens, so load right away.
              <Image
                src={certification.image}
                alt={`Certificate: ${certification.name}`}
                loading="eager"
                className="h-auto max-h-[60vh] max-w-full rounded-lg object-contain"
              />
            ) : (
              <ComingSoon icon={Award} label="Certificate coming soon" />
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
            <div>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                {certification.issuer}
              </p>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                {certification.date}
              </p>
            </div>
            {certification.url && (
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <BadgeCheck size={16} aria-hidden />
                Verify credential
              </a>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
